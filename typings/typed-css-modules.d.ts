// 解决import.scss报错问题
declare module "*.scss" {
  const content: any;
  export default content;
}


