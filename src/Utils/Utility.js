export function validityTracker(element) {
  this.element=element
  this.issues=[];
}

validityTracker.prototype.retrieve=function(){
  return this.element.value;
}
validityTracker.prototype.addIssue=function(issue){
  this.issues.push(issue)
}
validityTracker.prototype.trackPassword=function(){
    let query= this.retrieve();
    let upperCase=/[A-Z]/.test(query) || this.addIssue('Missing an upperCase character')
    let specialChar=/[@!#$%&]/.test(query) ||this.addIssue('Missing on of these @ ! # $ % & ')
    let digitTest=/\d/.test(query)||this.addIssue('missing a digit');
    let lowerCaseTest=/[a-z]/.test(query)||this.addIssue('missing a lowercase character');
}
validityTracker.prototype.trackEmail= function(){
  let query=this.retrieve();
  let emailTest=/@/.test(query) ||this.addIssue('The email seems to be invalid')
}
validityTracker.prototype.checkValidity=function(){
  let type= this.element.name;
  if(type==='password'){
    this.trackPassword();
    switch(this.issues.length){
      case 1:
        this.element.setCustomValidity(this.issues[0]);
        break;
      case 2:
        this.element.setCustomValidity(this.issues.join(','));
        break;
      case 3:
        this.element.setCustomValidity(this.issues.join(','));
        break;
      default:
        this.element.setCustomValidity('');
        break;
    }
  }
  else if (type==='email'){
    this.trackEmail();
    switch(this.issues.length){
      case 1:
        this.element.setCustomValidity(this.issues[0]);
        break;
      default:
        this.element.setCustomValidity('');
        break;
    }
  }
  this.issues=[]
}
