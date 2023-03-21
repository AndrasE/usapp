try {
    const database = getDatabase();
    //first check if the user registered before

    const userObj = await findUser(userDetails.name);

    if (userObj) {
      setMyData(userObj);
    } else {
      const newUserObj = {
        name: userDetails.name,
        photo: userDetails.photo,
        email: userDetails.email,
        theme: 'light',
      };
      set(ref(database, `users/${userDetails.name}`), newUserObj);
      setMyData(newUserObj);
    }
    // console.log(database);
  } catch (error) {
    console.error(error);
  }