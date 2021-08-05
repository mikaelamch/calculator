export default function validateInfo(values) {
    let errors ={}

    if(!values.monthlyIncome) {
        errors.monthlyIncome = 'Monthly income is required'
    }
    else if(values.monthlyIncome<500000) {
        errors.monthlyIncome = 'The minimum monthly income should be 500.000'
    }

    if(!values.requestedAmount) {
        errors.requestedAmount = 'Requested amount is required'

    }
    else if(values.requestedAmount<20000000) {
        errors.requestedAmount = "The minimum requested amount should be 20.000.000"
    }

    if(!values.loanTerm) {
        errors.loanTerm = 'Loan term is required'

    }
    else if(values.loanTerm<36 || values.loanTerm>360) {
        errors.loanTerm = 'The loan term should be between 36 months and 360 months'
    }


    
    return errors;
}