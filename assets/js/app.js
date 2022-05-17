const btnShowAlert = document.getElementById("show-alert");
const btnShowDialog = document.getElementById("show-dialog");

// show alert :
btnShowAlert.addEventListener("click", () => {
  Alert.Show({
    type: "success",
    title: "Hello world",
    textContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur exercitationem rerum a, animi debitis quis, magni delectus doloremque sed est quo minima, quidem quod deleniti earum fugiat corrupti in.`,
  });
});

// show dialog :
btnShowDialog.addEventListener("click", () => {
  Dialog.Show({
    title: "Hello world",
    textContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur exercitationem rerum a, animi debitis quis, magni delectus doloremque sed est quo minima, quidem quod deleniti earum fugiat corrupti in.`,
    onYes: () => {
      Alert.Show({
        type: "success",
        title: "Hello world",
        textContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur exercitationem rerum a, animi debitis quis, magni delectus doloremque sed est quo minima, quidem quod deleniti earum fugiat corrupti in.`,
      });
    },
    onNo: () => {
      Alert.Show({
        type: "danger",
        title: "Hello world",
        textContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur exercitationem rerum a, animi debitis quis, magni delectus doloremque sed est quo minima, quidem quod deleniti earum fugiat corrupti in.`,
      });
    },
  });
});
