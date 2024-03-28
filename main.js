// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (numOrg, arr) =>{
  return{
    specimenNum: numOrg,
    dna: arr,
    mutate(){
      let randomNum = Math.floor((Math.random() * 15) + 1);
      let old = this.dna[randomNum]
      this.dna[randomNum] = returnRandBase();
      while(this.dna[randomNum] === old){
        this.dna[randomNum] = returnRandBase();
      }
    },
    compareDNA(pAequor){
      let sameNumber = 0;
      for(let i = 0; i < this.dna.length; i++){
        if(pAequor.dna[i] === this.dna[i]){
          sameNumber++;
        }
      }
      console.log(sameNumber)
      return `Specimen #${pAequor.specimenNum} and specimen #${this.specimenNum} have ${(sameNumber/15)*100}% DNA in common` 
    },
    willLikelySurvive(){
      let sameNumber = 0;
      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === "C" || this.dna[i] === "G"){
          sameNumber++;
        }
      }
      if((sameNumber/15)*100 >= 60){
        return true;
      }
      return false;
    }

  }
}

const pAequorArr = [];

for(let i =0; i < 30; i++){
  pAequorArr.push(pAequorFactory(i, mockUpStrand()));
}








