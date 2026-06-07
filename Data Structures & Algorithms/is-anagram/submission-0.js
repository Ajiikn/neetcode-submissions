class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        const notebook1 = {}
        const notebook2 = {}

            for (let i = 0; i < s.length; i++){
                const letter1 = s[i]
                const letter2 = t[i]

                notebook1[letter1] = (notebook1[letter1] || 0) + 1
                notebook2[letter2] = (notebook2[letter2] || 0) + 1
            }
                for (let letter in notebook1){
                    if (notebook1[letter] !== notebook2[letter]) {
                        return false
                    }
                }
        return true    
    }
}
