import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const COUNTER_KEY = "globalCounter";

let globalCounter = 0;
const getCounter = async () => {
  return Promise.resolve(globalCounter);
};

export const useCounter = () => {
  const queryClient = useQueryClient();

  const { data: counter = 0 } = useQuery({
    queryKey: [COUNTER_KEY],
    queryFn: getCounter,
  });

  const { mutate: incrementCounter } = useMutation({
    mutationFn: (value = 1) => {
      globalCounter += value;
      return Promise.resolve(globalCounter);
    },
    onSuccess: (newValue) => {
      queryClient.setQueryData([COUNTER_KEY], newValue);
    },
  });

  const { mutate: decrementCounter } = useMutation({
    mutationFn: (value = 1) => {
      globalCounter -= value;
      return Promise.resolve(globalCounter);
    },
    onSuccess: (newValue) => {
      queryClient.setQueryData([COUNTER_KEY], newValue);
    },
  });

  return { counter, incrementCounter, decrementCounter };
};
