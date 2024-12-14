// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
};

function pAequorFactory(specimenNum, dna) {
    return {
        specimenNum,
        dna,

        mutate() {
            const randomIndex = Math.floor(Math.random() * this.dna.length);
            const currentBase = this.dna[randomIndex];
            let newBase;

            do {
                newBase = returnRandBase();
            } while (newBase === currentBase);

            this.dna[randomIndex] = newBase;

            return this.dna;
        },

        compareDNA(otherPaequor) {
            let identicalBases = 0;

            for (let i = 0; i < this.dna.length; i++) {
                if (this.dna[i] === otherPaequor.dna[i]) {
                    identicalBases++;
                }
            }

            const percentage = ((identicalBases / this.dna.length) * 100).toFixed(2);

            console.log(
                `Specimen #${this.specimenNum} and Specimen #${otherPaequor.specimenNum} have ${percentage}% DNA in common.`
            );
        },

        willLikelySurvive() {
            const survivalBases = this.dna.filter(
                (base) => base === "C" || base === "G"
            );
            return survivalBases.length / this.dna.length >= 0.6;
        },

        complementStrand() {
            const complement = this.dna.map((base) => {
                switch (base) {
                    case "A":
                        return "T";
                    case "T":
                        return "A";
                    case "C":
                        return "G";
                    case "G":
                        return "C";
                    default:
                        return base;
                }
            });
            return complement;
        },
    };
}

function findMostRelated(pAequorInstances) {
    let maxSimilarity = 0;
    let mostRelatedPair = [];

    for (let i = 0; i < pAequorInstances.length - 1; i++) {
        for (let j = i + 1; j < pAequorInstances.length; j++) {
            let identicalBases = 0;
            const dna1 = pAequorInstances[i].dna;
            const dna2 = pAequorInstances[j].dna;

            for (let k = 0; k < dna1.length; k++) {
                if (dna1[k] === dna2[k]) {
                    identicalBases++;
                }
            }

            const similarity = (identicalBases / dna1.length) * 100;

            if (similarity > maxSimilarity) {
                maxSimilarity = similarity;
                mostRelatedPair = [pAequorInstances[i], pAequorInstances[j]];
            }
        }
    }
    console.log(
        `Specimen #${mostRelatedPair[0].specimenNum} and Specimen #${mostRelatedPair[1].specimenNum
        } have the highest similarity with ${maxSimilarity.toFixed(
            2
        )}% DNA in common.`
    );
}

const survivingPAequor = [];

while (survivingPAequor.length < 30) {
    const dnaSample = mockUpStrand();
    const newOrganism = pAequorFactory(survivingPAequor.length + 1, dnaSample);

    if (newOrganism.willLikelySurvive()) {
        survivingPAequor.push(newOrganism);
    }
}

console.log(survivingPAequor);

findMostRelated(survivingPAequor);