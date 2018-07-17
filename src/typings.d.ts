/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// Added to support json imports
declare module '*.json' {
  const value: any;
  export default value;
}
