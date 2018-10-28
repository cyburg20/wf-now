'use strict';


const ifThenElse =  async (job, jobFlow, parameters) => {

    const doIfThenElseNode = jobFlow[job.processposition]._attributes;
    const elseAttribute = doIfThenElseNode["ELSE"];
    const thenAttribute = doIfThenElseNode["THEN"];
    const operator = doIfThenElseNode["OPERATOR"]; //eq
    const valueAttribute = doIfThenElseNode["VALUE"]; //bar
    const propertyAttribute = doIfThenElseNode["PROPERTY"]; //foo
  

  
    // evaluate expression
    if (operator === "eq") {
      if (valueAttribute === parameters[propertyAttribute]) {
        //return then
        return thenAttribute;
      } else {        
        return elseAttribute;
      }
    } 


}

module.exports = ifThenElse;