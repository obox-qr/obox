import { useQuery } from '@tanstack/react-query';

export function useGetUser(key: string, cb: any) {
	const data = useQuery({
		queryKey: [key],
		queryFn: cb
	})
	return data
}
