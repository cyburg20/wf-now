<?xml version="1.0" encoding="ISO-8859-1"?>
<DPF>
  <config>
    <workflows>
      <DPF4Publish.UserExitInsteadOfAppendCoverRliLine
        COMMENT="DON&apos;T EDIT THIS PROCESS.

Customize the process name called instead
in server/dpf/conf/dpf4publish/publish.customer.ini
with keyword DPF4Publish.UserExitInsteadOfAppendCoverRliLine.

Use internal process names."
        DPFINT-Customer="1"
        DPFINT-Interactive="0"
        DPFINT-Type="WorkflowDescription"
        NAME="User Exit Instead Of Append Cover Rli Line"
        PROJECT="DPF4Publish"
        VERSION="$Id: wf-userexitinsteadofappendcoverrliline.customer.xml,v 1.1 2011/12/06 15:46:29 sek Exp $"
        >
        <DEFAULTS/>
        <END
          COMMENT=""
          NAME="END"
          POSX="200"
          POSY="100"
          TYPE="STOP"
          />
        <MAIN
          BEGIN="END"
          NAME=""
          />
        <MAPPING/>
      </DPF4Publish.UserExitInsteadOfAppendCoverRliLine>
    </workflows>
  </config>
</DPF>
