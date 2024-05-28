function twoSum(nums, target) {
    let num_indices = new Map();

    for (let indice_courant = 0; indice_courant < nums.length; indice_courant++) {
        let num = nums[indice_courant];
        let diff_cible_element_actuel = target - num;

        if (num_indices.has(diff_cible_element_actuel)) {
            return [num_indices.get(diff_cible_element_actuel), indice_courant];
        }

        num_indices.set(num, indice_courant);
    }
}

console.log(twoSum([2, 7, 11, 15], 9));