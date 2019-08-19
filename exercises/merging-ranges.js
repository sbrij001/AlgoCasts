// meetings are stored as objects
// objects have int props of start time and end time
// ints rep 30 min blocks past 9am

// create a function mergeranges
// accepts an argument of an array with mult meeting time ranges
// returns an array of condensed ranges

// We treat the meeting with earlier start time as "first," and the other as "second."
// If the end time of the first meeting is equal to or greater than the start time of the second meeting, we merge the two meetings into one time range. The resulting time range's start time is the first meeting's start, and its end time is the later of the two meetings' end times.
// Else, we leave them separate
