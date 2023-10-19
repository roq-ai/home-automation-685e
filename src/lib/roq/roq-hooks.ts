/* eslint-disable */
import useSWR from 'swr';
import type { Prisma } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';
import { useRoqClient } from './roq-client-provider';
import { SWRRequestOptions, RequestOptions } from './roq-sdk';

export function useCompanyFindMany<
  T extends Prisma.companyFindManyArgs,
  R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCompanyFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.company.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCompanyCount<T extends Prisma.companyCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.companyCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCompanyCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.company.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCompanyFindManyWithCount<
  T extends Prisma.companyFindManyArgs,
  R extends { data: GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCompanyFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.company.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCompanyFindFirst<
  T extends Prisma.companyFindFirstArgs,
  R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.companyFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCompanyFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.company.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useDeviceFindMany<
  T extends Prisma.deviceFindManyArgs,
  R extends GetFindResult<Prisma.$devicePayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.deviceFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useDeviceFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.device.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useDeviceCount<T extends Prisma.deviceCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.deviceCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useDeviceCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.device.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useDeviceFindManyWithCount<
  T extends Prisma.deviceFindManyArgs,
  R extends { data: GetFindResult<Prisma.$devicePayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.deviceFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useDeviceFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.device.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useDeviceFindFirst<
  T extends Prisma.deviceFindFirstArgs,
  R extends GetFindResult<Prisma.$devicePayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.deviceFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useDeviceFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.device.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useHomeFindMany<
  T extends Prisma.homeFindManyArgs,
  R extends GetFindResult<Prisma.$homePayload<DefaultArgs>, T>[],
>(args?: Prisma.SelectSubset<T, Prisma.homeFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useHomeFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.home.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useHomeCount<T extends Prisma.homeCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.homeCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useHomeCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.home.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useHomeFindManyWithCount<
  T extends Prisma.homeFindManyArgs,
  R extends { data: GetFindResult<Prisma.$homePayload<DefaultArgs>, T>[]; count: number },
>(args?: Prisma.SelectSubset<T, Prisma.homeFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useHomeFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.home.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useHomeFindFirst<
  T extends Prisma.homeFindFirstArgs,
  R extends GetFindResult<Prisma.$homePayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.homeFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useHomeFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.home.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useHomeDeviceFindMany<
  T extends Prisma.home_deviceFindManyArgs,
  R extends GetFindResult<Prisma.$home_devicePayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.home_deviceFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useHomeDeviceFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.home_device.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useHomeDeviceCount<T extends Prisma.home_deviceCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.home_deviceCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useHomeDeviceCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.home_device.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useHomeDeviceFindManyWithCount<
  T extends Prisma.home_deviceFindManyArgs,
  R extends { data: GetFindResult<Prisma.$home_devicePayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.home_deviceFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useHomeDeviceFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.home_device.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useHomeDeviceFindFirst<
  T extends Prisma.home_deviceFindFirstArgs,
  R extends GetFindResult<Prisma.$home_devicePayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.home_deviceFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useHomeDeviceFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.home_device.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useServiceFindMany<
  T extends Prisma.serviceFindManyArgs,
  R extends GetFindResult<Prisma.$servicePayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.serviceFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useServiceFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.service.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useServiceCount<T extends Prisma.serviceCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.serviceCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useServiceCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.service.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useServiceFindManyWithCount<
  T extends Prisma.serviceFindManyArgs,
  R extends { data: GetFindResult<Prisma.$servicePayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.serviceFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useServiceFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.service.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useServiceFindFirst<
  T extends Prisma.serviceFindFirstArgs,
  R extends GetFindResult<Prisma.$servicePayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.serviceFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useServiceFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.service.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindMany<
  T extends Prisma.userFindManyArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
>(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserCount<T extends Prisma.userCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindManyWithCount<
  T extends Prisma.userFindManyArgs,
  R extends { data: GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]; count: number },
>(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindFirst<
  T extends Prisma.userFindFirstArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
