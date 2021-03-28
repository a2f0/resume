export const STARTX                         = 15;
export const STARTY                         = 15;
export const RIGHT_PANEL_STARTY             = 35;
export const DOCUMENT_WIDTH                 = 612;
export const DOCUMENT_HEIGHT                = 792;
export const UNITS                          = 'pt';
export const DIVIDER_COLOR                  = 'red';
export const BACKGROUND_COLOR               = 'black';
export const TEXT_COLOR                     = 'white';
export const HEADER_SIZE                    = 14;
export const HEADER_COLOR                   = 'red';
export const EXPERIENCE_HEADER              = 'Experience'

export const LEFT_PANEL_XPOS                = 0;
export const LEFT_PANEL_YPOS                = 0;
export const LEFT_PANEL_PERCENTAGE          = .27;
export const LEFT_PANEL_WIDTH               = LEFT_PANEL_PERCENTAGE * DOCUMENT_WIDTH;
export const LEFT_PANEL_COLOR               = BACKGROUND_COLOR;

export const RIGHT_PANEL_XPOS               = LEFT_PANEL_WIDTH;
export const RIGHT_PANEL_YPOS               = 0;
export const RIGHT_PANEL_COLOR              = BACKGROUND_COLOR;
export const RIGHT_PANEL_PERCENTAGE         = 1 - LEFT_PANEL_PERCENTAGE;
export const RIGHT_PANEL_WIDTH              = RIGHT_PANEL_PERCENTAGE * DOCUMENT_WIDTH;

export const NAME_SIZE                      = 17;
export const NAME_WEIGHT                    = 400;
export const NAME_COLOR                     = 'white';
export const NAME_XPOS                      = STARTX;
export const NAME_YPOS                      = STARTY;
export const NAME_YPOS_MIDDLE               = NAME_YPOS + (NAME_SIZE/2);

export const ADDRESS_SIZE                   = 10;
export const ADDRESS_WEIGHT                 = 400;
export const ADDRESS_COLOR                  = 'white';
export const ADDRESS_XPOS                   = STARTX;
export const ADDRESS_YPOS                   = STARTY + NAME_SIZE;
export const ADDRESS_YPOS_MIDDLE            = ADDRESS_YPOS + ( ADDRESS_SIZE / 2);

export const VERTICAL_DIVIDER_STROKE_WIDTH  = 1;
export const VERTICAL_DIVIDER_XPOS          = LEFT_PANEL_WIDTH;
export const VERTICAL_DIVIDER_YPOS          = 20;
export const VERTICAL_DIVIDER_HEIGHT        = DOCUMENT_HEIGHT - 60;
export const VERTICAL_DIVIDER_COLOR         = DIVIDER_COLOR;
export const RIGHT_PANEL_STARTX             = VERTICAL_DIVIDER_XPOS + 15;

export const ADDRESS_LINE_STROKE_WIDTH      = 1;
export const ADDRESS_LINE_SPACING           = 12;
export const ADDRESS_LINE_YPOS              = ADDRESS_YPOS + ADDRESS_SIZE + ADDRESS_LINE_SPACING;
export const ADDRESS_LINE_WIDTH             = LEFT_PANEL_WIDTH * (1/3);
export const ADDRESS_LINE_X2                = VERTICAL_DIVIDER_XPOS;
export const ADDRESS_LINE_X1                = VERTICAL_DIVIDER_XPOS - ADDRESS_LINE_WIDTH;
export const ADDRESS_LINE_COLOR             = DIVIDER_COLOR;

export const PHONE_NUMBER_SIZE              = ADDRESS_SIZE;
export const PHONE_NUMBER_WEIGHT            = 400;
export const PHONE_NUMBER_COLOR             = 'white';
export const PHONE_NUMBER_XPOS              = STARTX
export const PHONE_NUMBER_YPOS              = ADDRESS_LINE_YPOS + ADDRESS_LINE_SPACING;
export const PHONE_NUMBER_YPOS_MIDDLE       = PHONE_NUMBER_YPOS + (PHONE_NUMBER_SIZE/2);

export const EMAIL_SIZE                     = ADDRESS_SIZE;
export const EMAIL_WEIGHT                   = 400;
export const EMAIL_COLOR                    = 'white';
export const EMAIL_XPOS                     = STARTX
export const EMAIL_YPOS                     = PHONE_NUMBER_YPOS_MIDDLE + (EMAIL_SIZE/2);

export const EXPERIENCE_HEADER_SIZE         = HEADER_SIZE;
export const EXPERIENCE_HEADER_XPOS         = RIGHT_PANEL_STARTX;
export const EXPERIENCE_HEADER_YPOS         = RIGHT_PANEL_STARTY;
