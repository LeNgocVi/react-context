import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Todos from "./components/Todos";
import ThemeContextProvider from "./Context/ThemeContext";
import TodoContextProvider from "./Context/TodoContext";
import AuthContextProvider from "./Context/AuthContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <TodoContextProvider>
            <Todos />
          </TodoContextProvider>
        </AuthContextProvider>

        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
