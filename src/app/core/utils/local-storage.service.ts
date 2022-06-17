import { StorageInterface } from "./storage.interface";

export class LocalStorage implements StorageInterface{
  private readonly tokenKey='accessToken';
  public getToken():string{
    const accessToken=localStorage.getItem('accessToken');
    if(accessToken){return accessToken;}
    return '';
  }
  public setToken(token:string){localStorage.setItem(this.tokenKey,token);}

}
