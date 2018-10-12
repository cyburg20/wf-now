'use strict';


const ifthenelse = (context) => {
         
    let job = context.job;
    let workFlow = context.workFlow;
    let parameters = context.result;

    const doIfThenElseNode = workFlow[job.processposition]._attributes;
    const elseAttribute = doIfThenElseNode["ELSE"];
    const thenAttribute = doIfThenElseNode["THEN"];
    const operator = doIfThenElseNode["OPERATOR"]; //eq
    const valueAttribute = doIfThenElseNode["VALUE"]; //bar
    const propertyAttribute = doIfThenElseNode["PROPERTY"]; //foo
  
    //parameterm abstraction
  
    // evaluate expression
    if (operator === "eq") {
      if (valueAttribute === parameters[propertyAttribute]) {
        //return then
        return thenAttribute;
      } else {        
        return elseAttribute;
      }
    } else if (operator === "ne") {
      // handle ne
    }
  



}

module.exports = ifthenelse;