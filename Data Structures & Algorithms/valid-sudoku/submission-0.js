class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Set();
        const columns = new Set();
        const boxes = new Set();


        for (let row = 0; row < 9; row++ ) {
            for (let column = 0; column < 9; column++) {
                const value = board[row][column]
                if(value === ".") continue;

                const rowKey = `${row}-${value}`;
                const columnKey = `${column}-${value}`;
                const boxKey = `${Math.floor(row / 3)}-${Math.floor(column / 3)}-${value}`


                if(rows.has(rowKey) || columns.has(columnKey) || boxes.has(boxKey)) {
                    return false
                }

                rows.add(rowKey)
                columns.add(columnKey)
                boxes.add(boxKey)
            }
        }

        return true
    }
}
