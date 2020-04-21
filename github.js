class Github{
    constructor(){
        this.client_id = 'c971e26f4320e279f9f4';
        this.client_secret = '5242c89c9255789263e32d9d6997dd118b806b82';
        this.repos_count = 5;
        this.repos_sort = "created:asc"
    }
    async getUser(user){
        
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await repoResponse.json();     
        
        return{profile, repos};
    }
}