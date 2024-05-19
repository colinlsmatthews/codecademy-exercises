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
let pAequor = (num, arr) => {
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


