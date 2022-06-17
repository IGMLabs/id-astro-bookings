import { Injectable } from "@angular/core";
import { StorageInterface } from "./storage.interface";

@Injectable()
export abstract class StorageBase implements StorageInterface{

public abstract getToken():string;
public abstract setToken(token:string):void;

}
