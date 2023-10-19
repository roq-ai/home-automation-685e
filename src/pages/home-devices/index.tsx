import {
  AccessOperationEnum,
  AccessServiceEnum,
  requireNextAuth,
  withAuthorization,
  useAuthorizationApi,
} from '@roq/nextjs';
import { compose } from 'lib/compose';
import { Box, Button, Flex, IconButton, Link, Text, TextProps } from '@chakra-ui/react';
import { ColumnDef } from '@tanstack/react-table';
import { Error } from 'components/error';
import { SearchInput } from 'components/search-input';
import Table from 'components/table';
import { useDataTableParams, ListDataFiltersType } from 'components/table/hook/use-data-table-params.hook';
import { DATE_TIME_FORMAT } from 'const';
import d from 'dayjs';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import AppLayout from 'layout/app-layout';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useMemo, useState } from 'react';
import { FiEdit2, FiPlus, FiTrash } from 'react-icons/fi';
import { PaginatedInterface } from 'interfaces';
import { withAppLayout } from 'lib/hocs/with-app-layout.hoc';
import { AccessInfo } from 'components/access-info';

import { HomeDeviceInterface } from 'interfaces/home-device';
import { useRoqClient, useHomeDeviceFindManyWithCount } from 'lib/roq';
import { convertQueryToPrismaUtil } from 'lib/utils';

type ColumnType = ColumnDef<HomeDeviceInterface, unknown>;

interface HomeDeviceListPageProps {
  filters?: ListDataFiltersType;
  pageSize?: number;
  hidePagination?: boolean;
  showSearchFilter?: boolean;
  titleProps?: TextProps;
  hideTableBorders?: boolean;
  tableOnly?: boolean;
  hideActions?: boolean;
}

export function HomeDeviceListPage(props: HomeDeviceListPageProps) {
  const {
    filters = {},
    titleProps = {},
    showSearchFilter = false,
    hidePagination,
    hideTableBorders,
    pageSize,
    tableOnly,
    hideActions,
  } = props;

  const { hasAccess } = useAuthorizationApi();
  const { onFiltersChange, onSearchTermChange, params, onPageChange, onPageSizeChange, setParams } = useDataTableParams(
    {
      filters,
      searchTerm: '',
      pageSize,
      order: [
        {
          desc: true,
          id: 'created_at',
        },
      ],
    },
  );

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          relations: ['home', 'device', 'service'],
          searchTerm: params.searchTerm,
          searchTermKeys: [],
          ...params.filters,
        },
        'home_device',
      ),
    [params.searchTerm, params.filters, params.pageNumber, params.order, params.pageSize],
  );
  const { data, error, isLoading, mutate } = useHomeDeviceFindManyWithCount({
    skip: params.pageNumber * params.pageSize,
    take: params.pageSize,
    orderBy: {
      created_at: 'desc',
    },
    ...queryParams,
  });
  const router = useRouter();
  const [deleteError, setDeleteError] = useState(null);

  const handleDelete = async (id: string) => {
    setDeleteError(null);
    try {
      await roqClient.home_device.delete({ where: { id } });
      await mutate();
    } catch (error) {
      setDeleteError(error);
    }
  };

  const handleView = (row: HomeDeviceInterface) => {
    if (hasAccess('home_device', AccessOperationEnum.READ, AccessServiceEnum.PROJECT)) {
      router.push(`/home-devices/view/${row.id}`);
    }
  };

  const columns: ColumnType[] = [
    {
      id: 'installation_date',
      header: 'Installation Date',
      accessorKey: 'installation_date',
      cell: ({ row: { original: record } }: any) =>
        record?.installation_date ? format(record?.installation_date, 'dd-MM-yyyy') : '',
    },
    {
      id: 'warranty_expiry',
      header: 'Warranty Expiry',
      accessorKey: 'warranty_expiry',
      cell: ({ row: { original: record } }: any) =>
        record?.warranty_expiry ? format(record?.warranty_expiry, 'dd-MM-yyyy') : '',
    },
    hasAccess('home', AccessOperationEnum.READ, AccessServiceEnum.PROJECT)
      ? {
          id: 'home',
          header: 'Home',
          accessorKey: 'home',
          cell: ({ row: { original: record } }: any) => (
            <Link as={NextLink} onClick={(e) => e.stopPropagation()} href={`/homes/view/${record.home?.id}`}>
              {record.home?.address}
            </Link>
          ),
        }
      : null,
    hasAccess('device', AccessOperationEnum.READ, AccessServiceEnum.PROJECT)
      ? {
          id: 'device',
          header: 'Device',
          accessorKey: 'device',
          cell: ({ row: { original: record } }: any) => (
            <Link as={NextLink} onClick={(e) => e.stopPropagation()} href={`/devices/view/${record.device?.id}`}>
              {record.device?.name}
            </Link>
          ),
        }
      : null,
    hasAccess('service', AccessOperationEnum.READ, AccessServiceEnum.PROJECT)
      ? {
          id: 'service',
          header: 'Service',
          accessorKey: 'service',
          cell: ({ row: { original: record } }: any) => (
            <Link as={NextLink} onClick={(e) => e.stopPropagation()} href={`/services/view/${record.service?.id}`}>
              {record.service?.name}
            </Link>
          ),
        }
      : null,
    !hideActions
      ? {
          id: 'actions',
          header: '',
          accessorKey: 'actions',
          cell: ({ row: { original: record } }: any) => (
            <Flex justifyContent="flex-end">
              <NextLink href={`/home-devices/view/${record.id}`} passHref legacyBehavior>
                <Button
                  onClick={(e) => e.stopPropagation()}
                  mr={2}
                  padding="0rem 8px"
                  height="24px"
                  fontSize="0.75rem"
                  variant="solid"
                  backgroundColor="state.neutral.transparent"
                  color="state.neutral.main"
                  borderRadius="6px"
                >
                  View
                </Button>
              </NextLink>
              {hasAccess('home_device', AccessOperationEnum.UPDATE, AccessServiceEnum.PROJECT) && (
                <NextLink href={`/home-devices/edit/${record.id}`} passHref legacyBehavior>
                  <Button
                    onClick={(e) => e.stopPropagation()}
                    mr={2}
                    padding="0rem 0.5rem"
                    height="24px"
                    fontSize="0.75rem"
                    variant="outline"
                    color="state.info.main"
                    borderRadius="6px"
                    border="1px"
                    borderColor="state.info.transparent"
                    leftIcon={<FiEdit2 width="12px" height="12px" color="state.info.main" />}
                  >
                    Edit
                  </Button>
                </NextLink>
              )}
              {hasAccess('home_device', AccessOperationEnum.DELETE, AccessServiceEnum.PROJECT) && (
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(record.id);
                  }}
                  padding="0rem 0.5rem"
                  variant="outline"
                  aria-label="edit"
                  height={'24px'}
                  fontSize="0.75rem"
                  color="state.error.main"
                  borderRadius="6px"
                  borderColor="state.error.transparent"
                  icon={<FiTrash width="12px" height="12px" color="error.main" />}
                />
              )}
            </Flex>
          ),
        }
      : null,
  ].filter(Boolean) as ColumnType[];
  const table = (
    <Table
      hidePagination={hidePagination}
      hideTableBorders={hideTableBorders}
      isLoading={isLoading}
      onPageChange={onPageChange}
      onPageSizeChange={onPageSizeChange}
      columns={columns}
      data={data?.data}
      totalCount={data?.count || 0}
      pageSize={params.pageSize}
      pageIndex={params.pageNumber}
      order={params.order}
      setParams={setParams}
      onRowClick={handleView}
    />
  );
  if (tableOnly) {
    return table;
  }

  return (
    <Flex direction="column" gap={{ md: 6, base: 7 }} shadow="none">
      <Flex justifyContent={{ md: 'space-between' }} direction={{ base: 'column', md: 'row' }} gap={{ base: '28px' }}>
        <Flex alignItems="center" gap={1}>
          <Text as="h1" fontSize="1.875rem" fontWeight="bold" color="base.content" {...titleProps}>
            Home Devices
          </Text>
          <AccessInfo entity="home_device" />
        </Flex>

        {hasAccess('home_device', AccessOperationEnum.CREATE, AccessServiceEnum.PROJECT) && (
          <NextLink href={`/home-devices/create`} passHref legacyBehavior>
            <Button
              onClick={(e) => e.stopPropagation()}
              height={'2rem'}
              padding="0rem 0.75rem"
              fontSize={'0.875rem'}
              fontWeight={600}
              bg="state.info.main"
              borderRadius={'6px'}
              color="base.100"
              _hover={{
                bg: 'state.info.focus',
              }}
              as="a"
            >
              <FiPlus size={16} color="state.info.content" style={{ marginRight: '0.25rem' }} />
              Create
            </Button>
          </NextLink>
        )}
      </Flex>
      {showSearchFilter && (
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'flex-start', md: 'space-between' }}
          gap={{ base: 2, md: 0 }}
        >
          <Box>
            <SearchInput value={params.searchTerm} onChange={onSearchTermChange} />
          </Box>
        </Flex>
      )}

      {error && (
        <Box>
          <Error error={error} />
        </Box>
      )}
      {deleteError && (
        <Box>
          <Error error={deleteError} />{' '}
        </Box>
      )}
      {table}
    </Flex>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'home_device',
    operation: AccessOperationEnum.READ,
  }),
  withAppLayout(),
)(HomeDeviceListPage);
