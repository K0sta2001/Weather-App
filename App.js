import Index from "./index.js";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Index />
    </QueryClientProvider>
  );
};

export default App;
