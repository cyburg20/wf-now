<?xml version="1.0" encoding="ISO-8859-1"?>
<DPF>
  <config>
    <workingunits>
      <send2plossys
        VERSION="$Id: wu-send2plossys.customer.xml,v 1.2 2003/03/13 13:46:55 wolfi Exp $"
        >
        <!-- configure your kNet connection to PLOSSYS netdome here -->
	<DEFAULTS
	  KNET_HOST="seppdos84"
	  KNET_PORT="7317"
          PLS_GATEDIR="%%PLSIO%%/stargate"
          />
      </send2plossys>
    </workingunits>
  </config>
</DPF>
