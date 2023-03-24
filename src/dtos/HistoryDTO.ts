export type HistoryDTO = {
  id: string;
  name: string;
  group: string;
  hours: string;
  created_at: number;
};

export type HistoryByDayDTO = {
  title: string;
  data: HistoryDTO[];
};
