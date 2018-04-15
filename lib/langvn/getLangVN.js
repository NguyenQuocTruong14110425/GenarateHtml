class getLangVN {
  constructor(
    Controller,
    NamePerson,
    DateDoTask,
    IdTask
  ) {
    this.Controller = Controller;
    this.NamePerson = NamePerson;
    this.DateDoTask = DateDoTask;
    this.IdTask = IdTask;
  }

  get initLangVn() {
    return this.Init;
  }
  Init(LangtranslateVN) {
    return `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
        <NewDataSet>
          <xs:schema id="NewDataSet" xmlns="" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:msdata="urn:schemas-microsoft-com:xml-msdata">
            <xs:element name="NewDataSet" msdata:IsDataSet="true" msdata:MainDataTable="Language" msdata:UseCurrentLocale="true">
              <xs:complexType>
                <xs:choice minOccurs="0" maxOccurs="unbounded">
                  <xs:element name="Language">
                    <xs:complexType>
                      <xs:attribute name="Name" type="xs:string" use="required" />
                      <xs:attribute name="Value" type="xs:string" />
                    </xs:complexType>
                  </xs:element>
                </xs:choice>
              </xs:complexType>
              <xs:unique name="Constraint1" msdata:PrimaryKey="true">
                <xs:selector xpath=".//Language" />
                <xs:field xpath="@Name" />
              </xs:unique>
            </xs:element>
          </xs:schema>

          <!-- ${this.Controller} [${this.NamePerson}][${this.DateDoTask}][${this.IdTask}] -->
          ${LangtranslateVN}
          <!-- end ${this.Controller} -->

          </NewDataSet>\n`
  }

  SetLangtranslateVN(FieldName, Translate) {
    return ` <Language Name="${FieldName}" Value="${Translate}" />\n`
  }

}

module.exports = getLangVN;