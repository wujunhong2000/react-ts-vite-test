interface PersonsList {
   jobNumber?: String,
   name?: String,
}
interface ChainData {
   title?: String,
   number?: String,
   id?: String,
}
export interface Detail {
   /**
    * ranking
    * @type {String}
    * @memberof Detail
    */
   ranking?: String,
   /**
    * prize
    * @type {String}
    * @memberof Detail
    */
   prize?: String,
   /**
    * ChainData
    * @type {ChainData}
    * @memberof Detail
    */
   chainData?: ChainData,
   /**
    * personsList
    * @type {Array<PersonsList>}
    * @memberof Detail
    */
   personsList?: Array<PersonsList>,
}
export interface RecordResult {
   personage?: Array<Detail> | [],
   annualMeeting?: Array<Detail> | [],
}