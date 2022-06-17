import { StorageInterface } from "./storage.interface";

export class SessionStorage implements StorageInterface{
private readonly tokenKey='accessToken';
  public getToken():string{
    const accessToken=sessionStorage.getItem('accessToken');
    if(accessToken){return accessToken;}
    return '';
  }
  public setToken(token:string){sessionStorage.setItem(this.tokenKey,token);}


}
