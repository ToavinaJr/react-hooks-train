export interface State {
    count: number;
    name: string;
}
  
export interface Action {
    type: string;
    payload?: string; 
}