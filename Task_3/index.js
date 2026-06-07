const getGitHubUser = require('./githubUser');
const KCStore = require('./KCStore');

(async () => {
    const user = await getGitHubUser('octocat');
    console.log(user);

    const store = new KCStore();

    store.addProduct({ id: 1, name: 'Laptop', price: 1200 });
    store.addProduct({ id: 2, name: 'Mouse', price: 25 });

    console.log(store.viewProducts());
})();

