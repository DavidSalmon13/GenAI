db.unemployment.aggregate([
    {
        $group: {
            _id: null,
            minYear: { $min: "$Year" },
            maxYear: { $max: "$Year" }
        }
    },
    {
        $project: {
            _id: 0,
            minYear: 1,
            maxYear: 1,
            yearsCollected: { $add: [{ $subtract: ["$maxYear", "$minYear"] }, 1] }
        }
    }
])
