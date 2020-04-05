/*
    constructs a cell object
    also has a meta object for various component support...
*/
function makeId() {
    let id = 0;
    return () => id++
}
let id = makeId()
class Cell {
    constructor(cls, label, data, meta = {type: 'label-line'}) {
        this.id = id()
        this.class = cls;
        this.label = label;
        this.data = data;
        this.meta = meta;
        if (!this.meta.type) {
            this.meta.type = 'label-line';
        }
    }
}

class Check {
    constructor(label, checked = false) {
        this.type = 'checkbox';
        this.label = label;
        this.checked = checked;
    }
}

function makeCells(arr) {
    return arr.map((x) => new Cell(x.class, x.label, x.data, x.meta));
}

// probably have a multidimensional array for it all..
window.PAGES = {
    page1: {
        studentParent: [
            [
                new Cell('col-lg-9', 'Student', 'test'),
                new Cell('col-lg-3', 'Sex', 'M'),
            ],
            [
                new Cell('col-lg-4', 'Birthdate'),
                new Cell('col-lg-3', 'Grade'),
                new Cell('col-lg-5', 'Student ID #')
            ],
            [new Cell('col-lg-9', 'Student Primary Language')],
            [new Cell('col-lg-9', 'Student English Proficiency Code (optional)')],
            [new Cell('col-lg-12', 'Address')],
            [new Cell('col-lg-9', 'Student Phone')],
            [new Cell('col-lg-9', 'LEP Status')],
            [new Cell('col-lg-12', 'Federal Placement Code')],
            [new Cell('col-lg-12', 'Federal Student Ethnicity Code')],
            [new Cell('col-lg-12', 'Parent/Guardian/Surrogate')],
            makeCells([
                {class: 'col-lg-6', label: 'Parent Phone Home'},
                {class: 'col-lg-6', label: 'Work'},
            ]),
            makeCells([
                {class: 'col-lg-6', label: 'Optional Cell'},
                {class: 'col-lg-6', label: 'Email'},
            ]),
            makeCells([{class: 'col-lg-12', label: 'Primary Language Spoken at Home'}]),
            makeCells([{class: 'col-lg-12', label: 'Interpreter or Other Accomidations Needed', meta: {display: 'block'}}]),
            makeCells([{class: 'col-lg-12', label: 'Emergency Contact/Phone Number'}]),
            makeCells([{class: 'col-lg-12', label: 'Current School'}]),
            makeCells([{class: 'col-lg-12', label: 'Zoned School'}]),
        ],
        eligibilityParent: [
            makeCells([{class: 'col-lg-12', meta: new Check('Autism Spectrum Disorder')}]),
            makeCells([{class: 'col-lg-12', label: 'Eligibility Date'}]),
            makeCells([{class: 'col-lg-12', label: 'Anticipated 3 year evaluation'}]),
        ],
        meeting: [
            [new Cell('col-lg-12', 'Date of meeting')],
            [new Cell('col-lg-12', 'Date of last IEP meeting')],
            [new Cell('col-lg-12', 'PURPOSE OF MEETING', null, {type: 'text'})],
            [new Cell('col-lg-12', null, null, new Check('Interim IEP'))],
            [new Cell('col-lg-12', null, null, new Check('Initial IEP'))],
            [new Cell('col-lg-12', null, null, new Check('Annual IEP'))],
            [new Cell('col-lg-12', null, null, new Check('IEP following initial evaluation'))],
            [
                new Cell('col-lg-6', null, null, new Check('Revision to IEP dated')),
                new Cell('col-lg-6', null, null)
            ],
            // TODO come back to one offs...
            [new Cell('col-lg-12', 'IEP services will begin')],
            [new Cell('col-lg-12', 'Anticipated duration of services')],
            [new Cell('col-lg-12', 'IEP review date')],
            [new Cell('col-lg-12', 'Comments', null, {type: 'textarea'})]
        ],
    }
}