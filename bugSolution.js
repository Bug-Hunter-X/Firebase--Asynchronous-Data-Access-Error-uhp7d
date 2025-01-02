Instead of directly accessing properties, use promises or async/await to ensure the data is fully loaded:

```javascript
// Using promises
db.collection('myCollection').doc('myDoc').get().then((snapshot) => {
  if (snapshot.exists) {
    const data = snapshot.data();
    console.log(data.myProperty);
  } else {
    console.log('Document does not exist');
  }
}).catch((error) => {
  console.error('Error getting document:', error);
});


// Using async/await
async function getData() {
  try {
    const snapshot = await db.collection('myCollection').doc('myDoc').get();
    if (snapshot.exists) {
      const data = snapshot.data();
      console.log(data.myProperty);
    } else {
      console.log('Document does not exist');
    }
  } catch (error) {
    console.error('Error getting document:', error);
  }
}
 getData();
```