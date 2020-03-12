import React,{Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';


class App extends Component {
  state={
    items:[],
    id:uuidv4(),
    item:'',
    editItem:false
  };
  handleChange=e=>{
    this.setState({item:e.target.value})
  };
  handleSubmit=e=>{
    e.preventDefault();
    const newitem={
      id:this.state.id,
      title:this.state.item
    }
    const updateItem=[...this.state.items,newitem]
    this.setState({items:updateItem,
                  item:'',
                id:uuidv4(),
              editItem:false})
  };
  clearList=()=>{
    this.setState({items:[]});
  };
  handleDelete=id=>{
    const filteredItems=this.state.items.filter((item)=>item.id!==id);
    this.setState({items:filteredItems});
  };
  handleEdit=(id)=>{
    const filteredItems=this.state.items.filter((item)=>item.id!==id);
    const selectedItem=this.state.items.find((item)=>item.id===id);
    this.setState({
      items:filteredItems,
      item:selectedItem.title,
      id:id,
      editItem:true
    }) 
}
render(){
    return (
      <section>
       <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
             <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
             <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
            </div>
        </div>
   
    </div>
  <footer class="page-footer font-small special-color-dark pt-4">
  <div className="footer-copyright text-center py-3">© 2020 Developed By:
<a href="https://www.linkedin.com/in/ravish-ahmad-1a9519111">Ravish Ahmad</a>
</div>
</footer>
</section>
  );
}
}

export default App;
