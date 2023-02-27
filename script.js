var stduentData = {
  getTotalAndAvg() {
    this.total = 0;
    for (var i = 0; i < this.marks.length; i++) {
      this.total += this.marks[i];
    }
    this.avg = this.total / this.marks.length;
  },
  getStudentGrade() {
    if (this.avg >= 40) {
      this.grade = "Student Passed";
    } else {
      this.grade = "You have a surprise";
    }
  },
  displayStudentDetails() {
    this.getTotalAndAvg();
    this.getStudentGrade();
    console.log("Studet name is " + this.sname);
    console.log("Gender " + this.sGender);
    console.log("Total is " + this.total);
    console.log("AVg is " + this.avg);
    console.log("Grade " + this.grade);

    document.querySelector("#dsname").innerText = "<b>" + this.sname + "</b>";
    document.querySelector("#dgender").innerHTML =
      "<b>" + this.sGender + "</b>";
    document.querySelector("#dclass").innerText = this.sClass;
    document.querySelector("#dtotal").innerText = this.total;
    document.querySelector("#davg").innerText = this.avg;
    document.querySelector("#dgrade").innerText = this.grade;
    document.querySelector("#lngsKnwn").innerHTML = this.languages.join(", ");
  },
};

var readUserData = () => {
  stduentData.sname = document.querySelector("#sname").value;
  stduentData.sClass = document.querySelector("#sclass").value;
  stduentData.sGender = document.querySelector(
    "input[name=gender]:checked"
  ).value;
  stduentData.marks = [];
  stduentData.languages = [];
  // Reading language
  /*if (document.querySelector("#lng_eng").checked) {
        stduentData.languages.push(document.querySelector("#lng_eng").value)
    }
    if (document.querySelector("#lng_tel").checked) {
        stduentData.languages.push(document.querySelector("#lng_tel").value)
    }
    if (document.querySelector("#lng_hin").checked) {
        stduentData.languages.push(document.querySelector("#lng_hin").value)
    } */
  var lngList = ["eng", "tel", "hin"];
  for (var i = 0; i < lngList.length; i++) {
    var id = "#lng_" + lngList[i];
    if (document.querySelector(id).checked) {
      stduentData.languages.push(document.querySelector(id).value);
    }
  }
  // stduentData.marks.push(parseInt(document.querySelector("#m1").value));
  // stduentData.marks.push(parseInt(document.querySelector("#m2").value));
  // stduentData.marks.push(parseInt(document.querySelector("#m3").value));
  // stduentData.marks.push(parseInt(document.querySelector("#m4").value));
  for (var i = 1; i <= 5; i++) {
    var id = "#m" + i;
    var marksValue = document.querySelector(id).value;
    marksValue = parseInt(marksValue);
    stduentData.marks.push(marksValue);
  }
  console.log(stduentData);
  stduentData.displayStudentDetails();
  document.querySelector(".progressCardBlock").style.display = "block";

  //document.write("Hello every one")
};

var reset = () => {
  console.log("reset called");
  document.querySelector("#sname").value = "";
  document.querySelector("#sclass").value = "";
  document.getElementById("lng_eng").checked = false;
  document.getElementById("lng_tel").checked = false;
  document.getElementById("lng_hin").checked = false;
  document.querySelector("input[name=gender]:checked").checked = false;
  for (var i = 1; i <= 5; i++) {
    var idd = "m" + i;
    document.getElementById(idd).value = "";
  }
};
