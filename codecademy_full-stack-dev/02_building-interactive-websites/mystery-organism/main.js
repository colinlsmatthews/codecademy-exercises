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

// Factory function
const pAequor = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      const index = Math.floor(Math.random() * arr.length);
      rBase = returnRandBase();
      do {
        arr[index] = rBase;
      } while (arr[index] !== rBase);
    },
    compareDNA(pAequorCompare) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i ++) {
        if (this.dna[i] === pAequorCompare.dna[i]) {
          count += 1;
        }
      }
      const percentage = ((count / this.dna.length) * 100).toFixed(2);
      console.log(`Specimen ${num} and ${pAequorCompare.specimenNum} have ${percentage}% DNA in Common.`)
    },
    willLikelySurvive() {
      let count = 0;
      for (let i = 0; i < this.dna.length; i ++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          count += 1;
        }
      }
      const percentage = ((count / this.dna.length) * 100).toFixed(2);
      return (percentage >= 60);
    },
    complementStrand() {
      // Create a .complementStrand() method to the factory function’s 
      // object that returns the complementary DNA strand. The rules are 
      // that 'A's match with 'T's and vice versa. Also, 'C's match with 
      // 'G's and vice versa. (Check the hint for more details)
    }
  }
}

const testSample1 = pAequor(3, mockUpStrand());
console.log(testSample1.dna);
testSample1.mutate();
console.log(testSample1.dna);

const testSample2 = pAequor(4, mockUpStrand());
console.log(testSample2.dna);
testSample1.compareDNA(testSample2);

console.log(testSample1.willLikelySurvive());
console.log(testSample2.willLikelySurvive());

let pAequorArray1 = [];
let count = 0;
while (count <= 30) {
  const pAequorInstance = pAequor(count, mockUpStrand());
  if (pAequorInstance.willLikelySurvive()){
    pAequorArray1.push(pAequorInstance);
  }
  count += 1
}
console.log(pAequorArray1);
