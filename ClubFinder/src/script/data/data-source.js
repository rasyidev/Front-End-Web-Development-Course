import clubs from './clubs.js';

class DataSource {
    static searchClub(keyword){
        const filteredClubs = clubs.filter( club => {
                    return club.name.toUpperCase().includes(keyword.toUpperCase())
                });
        return new Promise((resolve, reject) => {
            
            if (filteredClubs.length) {
                resolve(filteredClubs);
            } else {
                reject(`${keyword} +  is not found`);
            }
        })
    
    }
}

export default DataSource;