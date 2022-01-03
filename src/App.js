import Budget from "./components/Budget";
import ExpenseList from "./components/ExpenseList";
import Remaining from "./components/Remaining";
import Spent from "./components/Spent";


function App() {
  return (
    <div className="h-screen  w-screen container mx-auto">
      <h1 className="font-bold py-6 text-4xl">Budget App</h1>

      <div className="  columns-1 md:columns-3">
        
        <Budget />
        <Remaining />
        <Spent />
      </div>
      <ExpenseList />
    </div>
  );
}

export default App;
