export interface ApiResponse<T> {
  data: T;
  count: number,
  page: number,
  pageSize: number,
  totalCount: number
}
