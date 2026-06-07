async function getGitHubUser(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
            throw new Error("User not found");
        }

        const user = await response.json();

        return user;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

module.exports = getGitHubUser;

