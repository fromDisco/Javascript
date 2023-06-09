function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
});

// by deleting both of the references family.father becomes unreachable
// and is removed from the memory
delete family.father;
delete family.mother.husband;


// Garbage collection is performed automatically. We cannot force or prevent it.
// Objects are retained in memory while they are reachable.
// Being referenced is not the same as being reachable (from a root): 
// a pack of interlinked objects can become unreachable as a whole.
