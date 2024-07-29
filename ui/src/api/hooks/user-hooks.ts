import { QueryFunction, useQuery } from '@tanstack/react-query';

export function useGetUser(
  key: string,
  cb: QueryFunction<never, string[], never>
) {
  return useQuery({
    queryKey: [key],
    queryFn: cb,
  });
}
