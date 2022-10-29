import { init,  exit } from "../src/myPackage.js"
import crypto from "crypto";

console.log(exit(1))
// 블록체인은 말 그대로 여러 개의 블록이 사슬처럼 묶인 것
// 블록안엔 데이터가 들어있고 
// 이 블록은 다른 블록에 사슬처럼 묶여 있고 연결고리는 해시값이다.


interface BlocakShape{
  hash: string;
  prevHash : string;
  height: number;
  data: string;
}

class Block implements BlocakShape{
  public hash : string;
  constructor(
    public prevHash: string,
    public height : number ,
    public data: string
  ){
    // static 함수는 클래스 안에서 사용하는 함수인데,
    // 클래스 인스턴스가 없어도 부를 수 있는 함수이다.
    this.hash = Block.calculateHash(prevHash, height, data);
  }

  static calculateHash(prevHash: string, height: number, data: string){
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex")
  }
}
class Blockchain {
  private blocks: Block[]
  constructor(){
    this.blocks=[];
  }
  private getPrevHash(){
    if(this.blocks.length === 0) return ""

    return this.blocks[this.blocks.length -1].hash;
  }
  public addBlock(data:string){
    const newBlock = new Block(this.getPrevHash(), this.blocks.length+1, data)
    this.blocks.push(newBlock);
  }
  
  public getBlock(){
    return this.blocks
  }
}

const blockchain = new Blockchain();

blockchain.addBlock("FRIST ONE")
blockchain.addBlock("SECOND ONE")
blockchain.addBlock("THIRD ONE")

console.log(blockchain.getBlock())

