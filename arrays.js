const grades = ["A", "B", "A"];

function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

const finalgpa = gpaPoints.reduce((total,item)=>total+item) / gpaPoints.length;

const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];

const longerfruits = fruits.filter((word) => word.length < 6);

const values = [12, 34, 21, 54];

const luckNumber = 21;

const indexvalues = values.indexOf(luckNumber);