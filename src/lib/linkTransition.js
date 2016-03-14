export default function linkTransition(navigator, data) {
  let linkedObject = data || { message: 'Swipe right to dismiss' };
  if(navigator.state.navigator){
    navigator.state.navigator.push(linkedObject);
  }
  else {
    navigator.push(linkedObject);
  }
}