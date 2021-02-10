import classes from './App.module.css';
import KanbanContainer from "./components/KanbanContainer/KanbanContainer";

function App() {
  return (
    <div className={classes.container}>
      <KanbanContainer />
    </div>
  );
}

export default App;
