const outcomeArray = [
    {
        outcome: 'outcomeAMI',
        forms: {
            ageForm:true,
            sexForm:true,
            ruralForm:true,
            diabDurForm:true,
            smokingForm:true,
            AMIAnginaForm:true,
            PCICABGForm:true,
            strokeTIAForm:true,
            CHFForm:true,
            afForm:true,
            LEAForm:true,
            retinopathyForm:false,
            ESRDForm:false,
            cancerForm:false,
            mhForm:false,
            schizForm:false,
            raForm:false,
            metforminForm:false,
            insulinForm:true,
            statinsForm:true,
            antihyperForm:true,
            anticoagForm:false,
            SBPForm:true,
            DBPForm:false,
            BMIForm:false,
            A1CForm:true,
            ACRForm:true,
            creatinineForm:true,
            eGFRForm:false,
            ldlForm:false,
            tchdlForm:true,
            trigFrom:true,
            ACEARBForm:false
        }
    },
    {
        outcome: 'Stroke',
        forms: {
            ageForm:true,
            sexForm:true,
            ruralForm:false,
            diabDurForm:true,
            smokingForm:false,
            AMIAnginaForm:false,
            PCICABGForm:false,
            strokeTIAForm:true,
            CHFForm:true,
            afForm:true,
            LEAForm:false,
            retinopathyForm:false,
            ESRDForm:false,
            cancerForm:false,
            mhForm:true,
            schizForm:false,
            raForm:false,
            metforminForm:true,
            insulinForm:false,
            statinsForm:false,
            antihyperForm:true,
            anticoagForm:false,
            SBPForm:true,
            DBPForm:false,
            BMIForm:true,
            A1CForm:true,
            ACRForm:true,
            creatinineForm:false,
            eGFRForm:false,
            ldlForm:false,
            tchdlForm:true,
            trigFrom:false,
            ACEARBForm:false
        }
    },
    {
        outcome: 'outcomeCHF',
        forms: {
            ageForm:true,
            sexForm:true,
            ruralForm:true,
            diabDurForm:true,
            smokingForm:true,
            AMIAnginaForm:true,
            PCICABGForm:true,
            strokeTIAForm:false,
            CHFForm:false,
            afForm:true,
            LEAForm:false,
            retinopathyForm:false,
            ESRDForm:false,
            cancerForm:false,
            mhForm:false,
            schizForm:false,
            raForm:true,
            metforminForm:false,
            insulinForm:true,
            statinsForm:false,
            antihyperForm:true,
            anticoagForm:true,
            SBPForm:true,
            DBPForm:true,
            BMIForm:true,
            A1CForm:true,
            ACRForm:true,
            creatinineForm:true,
            eGFRForm:false,
            ldlForm:true,
            tchdlForm:false,
            trigFrom:false,
            ACEARBForm:false
        }
    },
    {
        outcome: 'outcomeLEA',
        forms: {
            ageForm:true,
            sexForm:true,
            ruralForm:true,
            diabDurForm:true,
            smokingForm:true,
            AMIAnginaForm:true,
            PCICABGForm:true,
            strokeTIAForm:false,
            CHFForm:false,
            afForm:true,
            LEAForm:true,
            retinopathyForm:true,
            ESRDForm:false,
            cancerForm:false,
            mhForm:false,
            schizForm:false,
            raForm:false,
            metforminForm:false,
            insulinForm:true,
            statinsForm:false,
            antihyperForm:false,
            anticoagForm:true,
            SBPForm:false,
            DBPForm:false,
            BMIForm:true,
            A1CForm:true,
            ACRForm:true,
            creatinineForm:true,
            eGFRForm:false,
            ldlForm:false,
            tchdlForm:true,
            trigFrom:false,
            ACEARBForm:false
        }
    },
    {
        outcome: 'Foot Ulcer',
        forms: {
            ageForm:true,
            sexForm:true,
            ruralForm:true,
            diabDurForm:true,
            smokingForm:true,
            AMIAnginaForm:false,
            PCICABGForm:true,
            strokeTIAForm:false,
            CHFForm:true,
            afForm:false,
            LEAForm:true,
            retinopathyForm:true,
            ESRDForm:true,
            cancerForm:false,
            mhForm:false,
            schizForm:false,
            raForm:false,
            metforminForm:true,
            insulinForm:true,
            statinsForm:true,
            antihyperForm:false,
            anticoagForm:false,
            SBPForm:false,
            DBPForm:true,
            BMIForm:true,
            A1CForm:true,
            ACRForm:true,
            creatinineForm:false,
            eGFRForm:false,
            ldlForm:false,
            tchdlForm:false,
            trigFrom:false,
            ACEARBForm:true
        }
    },
    {
        outcome: 'outcomeRetinopathy',
        forms: {
            ageForm:true,
            sexForm:true,
            ruralForm:false,
            diabDurForm:true,
            smokingForm:true,
            AMIAnginaForm:false,
            PCICABGForm:false,
            strokeTIAForm:false,
            CHFForm:false,
            afForm:false,
            LEAForm:false,
            retinopathyForm:false,
            ESRDForm:false,
            cancerForm:false,
            mhForm:false,
            schizForm:false,
            raForm:false,
            metforminForm:true,
            insulinForm:true,
            statinsForm:true,
            antihyperForm:false,
            anticoagForm:false,
            SBPForm:true,
            DBPForm:false,
            BMIForm:true,
            A1CForm:true,
            ACRForm:true,
            creatinineForm:false,
            eGFRForm:false,
            ldlForm:true,
            tchdlForm:false,
            trigFrom:true,
            ACEARBForm:false
        }
    },
    {
        outcome: 'outcomeESRD',
        forms: {
            ageForm:true,
            sexForm:true,
            ruralForm:false,
            diabDurForm:true,
            smokingForm:true,
            AMIAnginaForm:true,
            PCICABGForm:false,
            strokeTIAForm:false,
            CHFForm:false,
            afForm:false,
            LEAForm:false,
            retinopathyForm:false,
            ESRDForm:false,
            cancerForm:true,
            mhForm:false,
            schizForm:false,
            raForm:false,
            metforminForm:false,
            insulinForm:false,
            statinsForm:false,
            antihyperForm:false,
            anticoagForm:false,
            SBPForm:true,
            DBPForm:false,
            BMIForm:false,
            A1CForm:false,
            ACRForm:true,
            creatinineForm:true,
            eGFRForm:false,
            ldlForm:false,
            tchdlForm:false,
            trigFrom:false,
            ACEARBForm:false
        }
    },
    {
        outcome: 'cv',
        forms: {
            ageForm:true,
            sexForm:true,
            ruralForm:false,
            diabDurForm:true,
            smokingForm:true,
            AMIAnginaForm:true,
            PCICABGForm:false,
            strokeTIAForm:true,
            CHFForm:true,
            afForm:true,
            LEAForm:true,
            retinopathyForm:true,
            ESRDForm:true,
            cancerForm:false,
            mhForm:false,
            schizForm:true,
            raForm:true,
            metforminForm:false,
            insulinForm:false,
            statinsForm:false,
            antihyperForm:false,
            anticoagForm:true,
            SBPForm:false,
            DBPForm:true,
            BMIForm:false,
            A1CForm:true,
            ACRForm:true,
            creatinineForm:true,
            eGFRForm:false,
            ldlForm:false,
            tchdlForm:true,
            trigFrom:true,
            ACEARBForm:false
        }
    },
    {
        outcome: 'ncv',
        forms: {
            ageForm:true,
            sexForm:true,
            ruralForm:false,
            diabDurForm:true,
            smokingForm:true,
            AMIAnginaForm:true,
            PCICABGForm:false,
            strokeTIAForm:false,
            CHFForm:true,
            afForm:false,
            LEAForm:false,
            retinopathyForm:false,
            ESRDForm:true,
            cancerForm:true,
            mhForm:true,
            schizForm:true,
            raForm:false,
            metforminForm:false,
            insulinForm:true,
            statinsForm:true,
            antihyperForm:false,
            anticoagForm:true,
            SBPForm:false,
            DBPForm:true,
            BMIForm:false,
            A1CForm:true,
            ACRForm:true,
            creatinineForm:true,
            eGFRForm:false,
            ldlForm:false,
            tchdlForm:false,
            trigFrom:false,
            ACEARBForm:false
        }
    },
    {
        outcome: 'allCause',
        forms: {
            ageForm:true,
            sexForm:true,
            ruralForm:false,
            diabDurForm:true,
            smokingForm:true,
            AMIAnginaForm:true,
            PCICABGForm:false,
            strokeTIAForm:true,
            CHFForm:true,
            afForm:true,
            LEAForm:true,
            retinopathyForm:false,
            ESRDForm:true,
            cancerForm:true,
            mhForm:true,
            schizForm:true,
            raForm:false,
            metforminForm:false,
            insulinForm:true,
            statinsForm:true,
            antihyperForm:false,
            anticoagForm:true,
            SBPForm:false,
            DBPForm:true,
            BMIForm:true,
            A1CForm:true,
            ACRForm:true,
            creatinineForm:true,
            eGFRForm:false,
            ldlForm:true,
            tchdlForm:true,
            trigFrom:true,
            ACEARBForm:false
        }
    },
    {
        outcome: 'AMI-Stroke-CVD',
        forms: {
            ageForm:true,
            sexForm:true,
            ruralForm:true,
            diabDurForm:true,
            smokingForm:true,
            AMIAnginaForm:true,
            PCICABGForm:false,
            strokeTIAForm:true,
            CHFForm:true,
            afForm:false,
            LEAForm:true,
            retinopathyForm:false,
            ESRDForm:false,
            cancerForm:false,
            mhForm:false,
            schizForm:false,
            raForm:false,
            metforminForm:false,
            insulinForm:true,
            statinsForm:false,
            antihyperForm:true,
            anticoagForm:true,
            SBPForm:true,
            DBPForm:false,
            BMIForm:true,
            A1CForm:true,
            ACRForm:true,
            creatinineForm:true,
            eGFRForm:false,
            ldlForm:false,
            tchdlForm:true,
            trigFrom:false,
            ACEARBForm:false
        }
    }
];

function hideAllForms(){
    let forms = document.querySelectorAll("#inputForms div")

    document.getElementById("calculateRiskArea").hidden = true

    document.getElementById("outputArea").innerHTML = ""

    for (let i = 0; i < forms.length; i++) {
        forms[i].hidden = true
    }
}

hideAllForms()

function showHideForms(){
    hideAllForms()

    document.getElementById("calculateRiskArea").hidden = false

    for(let i = 0; i<outcomeArray.length; i++){
        if(document.getElementById("outcome").value==outcomeArray[i].outcome){
            for(let form in outcomeArray[i].forms){
                document.getElementById(form).hidden = !outcomeArray[i].forms[form]
            }
            break
        }
    }

    //eGFR is imputed so hide input form always
    document.getElementById("eGFRForm").hidden = true
}

function doTheMath(userInputsArray, betas, CIF0){
    let sumProduct = 0

    //console.log(userInputsArray)

    for(let i = 0; i < betas.length; i++){
        //console.log(sumProduct)
        sumProduct = sumProduct + parseFloat(userInputsArray[i])*parseFloat(betas[i])
    }

    //console.log("SumProduct: "+sumProduct)

    let fiveYearRisk = 1 - (1 - CIF0)**Math.exp(sumProduct)

    return(fiveYearRisk)
}

function calculateRisk() {
    let betas = 0
    let CIF0 = 0
    let outcome = document.getElementById("outcome").value

    if(outcome=="outcomeAMI"){
        CIF0 = 0.0002015149
        betas = [0.00000000000000000, 0.31670282697337300, -0.11248715231361800, 0.17039057464395200,
            0.31712507136598100, 0.41470839309965200, -0.31130751374209400, 0.03827666017356740,
            -0.01658428565593060, 0.03550418399113490, 0.63857860272576200, 0.72394471014454200,
            0.00000000000000000, 0.53040635603819900, 0.00000000000000000, 0.00000000000000000,
            0.20288985578452700, 0.00202685505261151, 0.00000000000000000, 0.00195249883956560,
            0.05556506254032380, 0.40090366575553300, 0.00000000000000000, 0.00000000000000000,
            0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 1.35226727249018000, 
            0.00000000000000000, 0.00000000000000000, 0.34334529938710700, 0.00000000000000000,
            0.00000000000000000, 0.16290139917131100, 0.00453259880765786, 0.00000000000000000, 
            0.28365172211298300, 0.44974262057717000, 0.26528510341697900, 0.11090779594292600,
            0.01718917835176330]
    }
    else if(outcome == "Stroke"){
        CIF0 = 0.0001481070
        betas = [0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 0.39174844414301900,
            0.49369261154949000, 0.63273110045070000, 0.38051330088583100, 0.04465220170193290, 
            0.00000000000000000, 0.06161156669555220, 0.00000000000000000, 0.00000000000000000, 
            0.00000000000000000, 0.29099904743955000, -0.02485462014157310, 0.00000000000000000, 
            0.27325754534799200, 0.00000000000000000, 0.00000000000000000, 0.08018423558921620, 
            0.28838650980064300, 0.14903064599863900, 0.00000000000000000, 0.00000000000000000,
            0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 0.14138509371299600,
            0.15798594667350000, 0.11234311773499600, 0.00000000000000000, 0.00000000000000000, 
            0.00000000000000000, 0.00000000000000000, 0.00657807311316402, 0.00000000000000000, 
            0.00000000000000000, 0.00000000000000000, 0.84754951511748600, 0.09276487865572420,
            0.00000000000000000]
    }
    else if(outcome == "outcomeCHF"){
        CIF0 = 0.0001365040
        betas = [0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 0.39174844414301900,
            0.49369261154949000, 0.63273110045070000, 0.38051330088583100, 0.04465220170193290, 
            0.00000000000000000, 0.06161156669555220, 0.00000000000000000, 0.00000000000000000,
            0.00000000000000000, 0.29099904743955000, -0.02485462014157310, 0.00000000000000000,
            0.27325754534799200, 0.00000000000000000, 0.00000000000000000, 0.08018423558921620,
            0.28838650980064300, 0.14903064599863900, 0.00000000000000000, 0.00000000000000000, 
            0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 0.14138509371299600,
            0.15798594667350000, 0.11234311773499600, 0.00000000000000000, 0.00000000000000000,
            0.00000000000000000, 0.00000000000000000, 0.00657807311316402, 0.00000000000000000,
            0.00000000000000000, 0.00000000000000000, 0.84754951511748600, 0.09276487865572420,
            0.00000000000000000]
    }
    else if(outcome == "outcomeLEA"){
        CIF0 = 0.0010816917
        betas = [0.00000000000000000, 0.66276780429991400, 0.00000000000000000, 0.50429007317680400, 
            0.76954455751145300, 0.63672982840970800, -0.93106461227625400, -0.01171183524689490, 
            0.00000000000000000, 0.12681565982351900, -0.65924436740636900,	3.41476535312543000,
            0.96913684831359000, 0.00000000000000000, -0.02818733433733720, 0.00000000000000000,
            0.00000000000000000, 0.00308017839853637, 0.00000000000000000, 0.58093760503314600,
            0.95238239989067700, 1.38520885061434000, 0.00000000000000000, 0.00000000000000000,
            0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 0.24277829732237300, 
            0.00000000000000000, 0.00000000000000000, 1.04686187358503000, 0.00000000000000000,
            0.61613095027724500, 0.51816371265704400, 0.00000000000000000, 0.00000000000000000, 
            0.17860835140629800, 0.60239381823353700, 0.00000000000000000, 0.09205430811190400,
            0.00000000000000000]
    }
    else if(outcome == "Foot Ulcer"){
        CIF0 = 0.0020865935
        betas = [0.13818849958466000, 0.43052134049543000, -0.22841697891996200, 0.29084940911833600,
            0.47366532759184600, 0.58111408168293300, 0.00000000000000000, 0.01614565666679590,
            -0.01203786176273620, 0.06559693838457640, 0.00000000000000000, 2.19774181103952000,
            0.00000000000000000, 0.00000000000000000, 0.04139551776199210, 0.00000000000000000, 
            0.52228573466407200, 0.00000000000000000, -0.00604782329346502, 0.13140643589067900,
            0.33479271957594800, 0.58941661438541500, 0.00000000000000000, 0.79543789845753900,
            0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 1.09880663771334000,
            0.08784062858549220, 0.00000000000000000, 0.17363457713825700, 0.00000000000000000,
            0.44373240871540100, 0.34243155338062200, 0.00000000000000000, 0.00000000000000000,
            0.07657448745869420, 0.19437341909577700, 0.00000000000000000, 0.00000000000000000,
            0.00000000000000000]
    }
    else if(outcome == "outcomeRetinopathy"){
        CIF0 = 0.0027070339
        betas = [0.00000000000000000, 0.49123150244396200, -0.13080201928513700, 0.31898348763990700,
            0.68652374333185700, 0.88348037835678500, 0.00000000000000000, 0.00455631673681056,
            0.00000000000000000, 0.15917385336677900, 0.00000000000000000, 0.00000000000000000,
            0.00000000000000000, 0.00000000000000000, -0.02255072996410350, 0.00000000000000000,
            0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 0.28727539628000500, 
            0.84769708648831800, 0.99036410522418300, 0.00000000000000000, 0.00000000000000000, 
            0.00000000000000000, 0.00000000000000000, 0.09748259652078800, 0.20935341847889700, 
            0.24516737514820100, 0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 
            0.00000000000000000, 0.00000000000000000, 0.00548100142436858, 0.00000000000000000,
            -0.04799232430472940, -0.31655854462799600, 0.00000000000000000, 0.00000000000000000,
            -0.09935626327640900]
    }
    else if(outcome == "outcomeESRD"){
        CIF0 = 0.7699720622
        betas = [0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 1.21055974561372000,
            2.00599606697560000, 2.76633839619823000, 0.65715378850081400, -0.04929762937646410,
            0.00000000000000000, 0.00000000000000000, 0.56336708400246000, 0.00000000000000000,
            0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 0.45233977014861400, 
            0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 0.05819231131184620,
            0.77221690127918800, 1.30858012953476000, -0.04137640639794540, 0.00000000000000000,
            0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 
            0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 0.00000000000000000,
            0.00000000000000000, 0.00000000000000000, -0.00958872477000077, 0.00000000000000000,
            0.03707673135527570, -0.77419553078305300, 0.00000000000000000, 0.00000000000000000,
            0.00000000000000000]
    }
    else if(outcome == "allCause"){
        CIF0 = 0.0000351708
        betas = [0.00000000000000000, 0.22263549874000500, -0.15260788836533600, 0.41545813509632000, 0.56533536432176100,
            0.76061246585690300, 0.22133533912897900, 0.08883287254624710, 0.00000000000000000, 0.07950189323697060,
            0.12764303121455400, 0.70421856752378200, 0.24808866139536900, 0.00000000000000000, 0.00628432839670749,
            0.36711449708426500, 0.52627464609346000, 0.00233274397463888, -0.01036913277198330, 0.05142138364137220,
            0.11972143452203000, 0.40285274094562900, 0.00419734199390158, 1.29379602203036000, 0.00000000000000000,
            0.00000000000000000, -0.07066823514046160, 0.14182879035135600, 0.00000000000000000, 0.07442117679373990,
            0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 0.00000000000000000,
            0.87481725838588800, 0.23479310652425800, 0.71763874877375600, 0.38752160159461100, 0.06550909518852550,
            -0.06901567705293840]
    }
    else if(outcome == "cv"){
        CIF0 = 0.0000123722
        betas = [0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 0.52406003470031600,
            0.45159168347216600, 0.78292300358182700, 0.42052783499754800, 0.08292113405083740, 
            0.00000000000000000, 0.07630670364280650, 0.60018923462843800, 1.16222108114898000,	
            0.38411637013471200, 0.00000000000000000, 0.00000000000000000, 0.00000000000000000,
            0.77053406589462100, 0.00000000000000000, -0.00862074315246563, 0.30810955901747800,
            0.24971812770099100, 0.77505824746235700, 0.00399767673907155, 1.15987417247848000,
            0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 0.00000000000000000,
            0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 0.51594279227708800,
            -0.39237570794051400, 0.00000000000000000, 0.00000000000000000, 0.69325967502738500,
            0.17369770622904600, 0.41787364249157100, 0.65916903271391200, 0.10531767637119900,
            -0.12632523330368900]
    }
    else if(outcome == "ncv"){
        CIF0 = 0.0000634023
        betas = [0.00000000000000000, 0.17476852838176600, -0.12342445953321900, 0.33802252311863100, 
            0.44798563774320000, 0.63621511667720900, 0.00000000000000000, 0.08056965917887900,
            0.00000000000000000, 0.04887369815061890, -0.18928974052740000, 0.00000000000000000,
            0.21891773150163400, 0.00000000000000000, 0.00000000000000000, 0.45451328868703200,
            0.35803747760828000, 0.00335554729558024, -0.01369964190750090, -0.02224367043511450,
            0.16361742045760100, 0.25016557772720200, 0.00810093525342758, 1.40937370947721000,
            0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 0.00000000000000000,
            0.00000000000000000, 0.10629669227219700, 0.00000000000000000, 0.00000000000000000,
            0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 0.76554485391452200,
            0.30363166849474300, 0.74590413487655700, 0.00000000000000000, 0.00000000000000000,
            0.00000000000000000]
    }
    //Not used
    else if(outcome == "AMI-Stroke-CVD"){
        CIF0 = 0.0002376548
        betas = [0.00000000000000000, 0.17989858432062000, 0.00000000000000000, 0.29667118677032500,
            0.40273443121450100, 0.51247755031095800, 0.00000000000000000, 0.04895457843810420,
            -0.01299863680710150, 0.07354358901313220, 0.57909916348831900, 0.68052405557309200,
            0.29771250132425000, 0.37815320613862800, -0.01042673964434350, 0.00000000000000000,
            0.47729042878479500, 0.00159334707237899, 0.00000000000000000, 0.03953897779620110,
            0.10984536051215200, 0.39208196264022900, 0.00000000000000000, 0.00000000000000000,
            0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 1.01438661541566000,
            0.00000000000000000, 0.00000000000000000, 0.00000000000000000, 0.00000000000000000,
            0.00000000000000000, 0.10575681050606600, 0.00408800806856669, 0.00000000000000000,
            0.24661313564600500, 0.33384751647751900, 0.53987690947213800, 0.09680798069155610,
            0.00000000000000000]
    }
  
    //Getting inputs from form field
    let age = parseInt(document.getElementById("age").value)
    let isMale = parseInt(document.getElementById("sex").value)
    let isRural = parseInt(document.getElementById("rural").value)
    let diabDur = parseInt(document.getElementById("diabDur").value)
    let smoking = parseInt(document.getElementById("smoking").value)
    let isAMIAngina = parseInt(document.getElementById("AMIAngina").value)
    let isPCICABG = parseInt(document.getElementById("PCICABG").value)
    let isStrokeTIA = parseInt(document.getElementById("strokeTIA").value)
    let isCHF = parseInt(document.getElementById("CHF").value)
    let isAf = parseInt(document.getElementById("af").value)
    let isLEA = parseInt(document.getElementById("LEA").value)
    let isRetinopathy = parseInt(document.getElementById("retinopathy").value)
    let isESRD = parseInt(document.getElementById("ESRD").value)
    let isCancer = parseInt(document.getElementById("cancer").value)
    let isMh = parseInt(document.getElementById("mh").value)
    let isSchiz = parseInt(document.getElementById("schiz").value)
    let isRa = parseInt(document.getElementById("ra").value)
    let isMetformin = parseInt(document.getElementById("metformin").value)
    let isInsulin = parseInt(document.getElementById("insulin").value)
    let isStatins = parseInt(document.getElementById("statins").value)
    let isAntihyper = parseInt(document.getElementById("antihyper").value)
    let isAnticoag = parseInt(document.getElementById("anticoag").value)
    let SBP = parseInt(document.getElementById("SBP").value)
    let DBP = parseInt(document.getElementById("DBP").value)
    let BMI = parseFloat(document.getElementById("BMI").value)
    let A1C = parseFloat(document.getElementById("A1C").value)
    let ACR = parseInt(document.getElementById("ACR").value)
    let creatinine = parseFloat(document.getElementById("creatinine").value)
    //let eGFR = parseFloat(document.getElementById("eGFR").value)
    let ldl = parseFloat(document.getElementById("ldl").value)
    let tchdl = parseFloat(document.getElementById("tchdl").value)
    let trig = parseFloat(document.getElementById("trig").value)
    let isACEARB = parseInt(document.getElementById("ACEARB").value)

    //Creating one hot encoded parameters (diabDur, smoking, acr)
    let oneHotDiabDur = 0
    if(diabDur==0) oneHotDiabDur = [0,0,0]
    else if(diabDur==1) oneHotDiabDur = [1,0,0]
    else if(diabDur==2) oneHotDiabDur = [0,1,0]
    else if(diabDur==3) oneHotDiabDur = [0,0,1]

    let oneHotSmoking = 0
    if(smoking==0) oneHotSmoking = [0,0]
    else if(smoking==2) oneHotSmoking = [1,0]
    else if(smoking==3) oneHotSmoking = [0,1]

    let oneHotACR = 0
    if(ACR==0) oneHotACR = [0,0,0]
    else if(ACR==2) oneHotACR = [1,0,0]
    else if(ACR==3) oneHotACR = [0,1,0]
    else if(ACR==4) oneHotACR = [0,0,1]

    let ageMaleInt = 0
    if(isMale) ageMaleInt = age

    let eGFR = 0
    if(isMale) eGFR = 141 * Math.min(creatinine/79.578, 1)**(-0.411) * Math.max(creatinine/79.578, 1)**(-1.209) * 0.993^age
    else eGFR = 143.538 * Math.min(creatinine/61.894, 1)**(-0.329) * Math.max(creatinine/61.894, 1)**(-1.209) * 0.993^age

    //Creating list of user parameter inputs
    userInputsArray = 
    [
        isACEARB,
        isInsulin,
        isStatins,
        oneHotACR[0],
        oneHotACR[1],
        oneHotACR[2],
        isAf,
        age,
        ageMaleInt,
        A1C,
        isAMIAngina,
        isLEA,
        isAnticoag,
        isAntihyper,
        BMI,
        isCancer,
        isCHF,
        creatinine,
        DBP,
        oneHotDiabDur[0],
        oneHotDiabDur[1],
        oneHotDiabDur[2],
        eGFR,
        isESRD,
        0, //Ethnicity vars
        0, //Ethnicity Vars 2
        ldl,
        isMale,
        isMetformin,
        isMh,
        isPCICABG,
        isRa,
        isRetinopathy,
        isRural,
        SBP,
        isSchiz,
        oneHotSmoking[0],
        oneHotSmoking[1],
        isStrokeTIA,
        tchdl,
        trig
    ]

    fiveYearRisk = (100 * doTheMath(userInputsArray, betas, CIF0)).toFixed(2)

    document.getElementById("outputArea").innerHTML = "Five Year Risk: "+fiveYearRisk+"%"
}