import { Subject } from "rxjs";

export interface ApiStatus{
  isLoading:boolean;
  errorMessage:string;
}

export class StatusStore {

  private state:ApiStatus;

  private state$: Subject<ApiStatus>;

  private initialState:ApiStatus={
    isLoading:false,
    errorMessage:''
  }

constructor(){
  this.state=this.initialState;
  this.state$=new Subject();
}

public setState(newState:ApiStatus){
  this.state=newState;
  this.state$.next(this.state);
}

public getState$(){
  return this.state$;
}

}

class Productora{
  private statusStore = new StatusStore();

  public hacerCosas(){
    this.statusStore.setState({isLoading:true, errorMessage:''});
  }

  public descansar(){
    this.statusStore.setState({isLoading:false,,errorMessage:''});
  }

}

class Consumidora{
  private statusStore=new StatusStore();

  public apiStatus!:ApiStatus;

  private pintarCambios(){
    this.statusStore.getState$().subscribe((currentState)=>{this.apiStatus=currentState})
  }


}
