import forIn from 'lodash/forIn';

// Function that helps format the data from firebase
export const firebaseLooper = data => {
    let newDataset = [];

    forIn(data, (item, key) => {
        newDataset.push({
            ...item,
            id: key
        });
    });

    return newDataset;
};

// Function that validates the email address
export const validateEmail = email => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
};
