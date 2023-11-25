import TodoList from "./components/TodoList"


export default function homePage() {

  console.log('this is homepage')
  return(
    <div className="overflow-y-scroll no-scrollbar">
      <TodoList />
    </div>
  )
}