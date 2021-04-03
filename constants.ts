export const STARTX                             = 15;
export const STARTY                             = 15;
export const RIGHT_PANEL_STARTY                 = 110;
export const DOCUMENT_WIDTH                     = 612;
export const DOCUMENT_HEIGHT                    = 792;
export const PIXELS_PER_POINT                   = .75;
export const UNITS                              = 'pt';
export const DIVIDER_COLOR                      = 'red';
export const BACKGROUND_COLOR                   = 'black';
export const TEXT_COLOR                         = 'white';
export const HEADER_SIZE                        = 14;
export const HEADER_SPACING                     = 8;
export const HEADER_COLOR                       = 'red';
export const EXPERIENCE_HEADER                  = 'EXPERIENCE';
export const SVG_FONT_FAMILY                    = 'Helvetica';
export const HYPEN_SPACING                      = 4;

export const LEFT_PANEL_XPOS                    = 0;
export const LEFT_PANEL_YPOS                    = 0;
export const LEFT_PANEL_PERCENTAGE              = .27;
export const LEFT_PANEL_WIDTH                   = LEFT_PANEL_PERCENTAGE * DOCUMENT_WIDTH;
export const LEFT_PANEL_COLOR                   = BACKGROUND_COLOR;
export const LEFT_PANEL_MARGIN                  = 10

export const RIGHT_PANEL_XPOS                   = LEFT_PANEL_WIDTH;
export const RIGHT_PANEL_YPOS                   = 0;
export const RIGHT_PANEL_COLOR                  = BACKGROUND_COLOR;
export const RIGHT_PANEL_PERCENTAGE             = 1 - LEFT_PANEL_PERCENTAGE;
export const RIGHT_PANEL_WIDTH                  = RIGHT_PANEL_PERCENTAGE * DOCUMENT_WIDTH;
export const RIGHT_PANEL_RIGHT_MARGIN           = 10;

export const FIRST_NAME_SIZE                    = 17;
export const FIRST_NAME_WEIGHT                  = 400;
export const FIRST_NAME_COLOR                   = 'white';
export const FIRST_NAME_XPOS                    = STARTX;
export const FIRST_NAME_YPOS                    = STARTY;
export const FIRST_NAME_YPOS_MIDDLE             = FIRST_NAME_YPOS + (FIRST_NAME_SIZE/2);

export const LAST_NAME_SIZE                     = FIRST_NAME_SIZE;
export const LAST_NAME_WEIGHT                   = FIRST_NAME_WEIGHT;
export const LAST_NAME_COLOR                    = 'red';
export const LAST_NAME_YPOS                     = STARTY;
export const LAST_NAME_YPOS_MIDDLE              = LAST_NAME_YPOS + (LAST_NAME_SIZE/2);

export const ADDRESS_SIZE                       = 10;
export const ADDRESS_WEIGHT                     = 400;
export const ADDRESS_COLOR                      = 'white';
export const ADDRESS_XPOS                       = STARTX;
export const ADDRESS_YPOS                       = STARTY + FIRST_NAME_SIZE;
export const ADDRESS_YPOS_MIDDLE                = ADDRESS_YPOS + ( ADDRESS_SIZE / 2);

export const VERTICAL_DIVIDER_STROKE_WIDTH      = 1;
export const VERTICAL_DIVIDER_XPOS              = LEFT_PANEL_WIDTH;
export const VERTICAL_DIVIDER_YPOS              = 20;
export const VERTICAL_DIVIDER_HEIGHT            = DOCUMENT_HEIGHT - 60;
export const VERTICAL_DIVIDER_COLOR             = DIVIDER_COLOR;

export const RIGHT_PANEL_MARGIN                 = LEFT_PANEL_MARGIN;
export const RIGHT_PANEL_STARTX                 = VERTICAL_DIVIDER_XPOS + RIGHT_PANEL_MARGIN;

export const ADDRESS_LINE_STROKE_WIDTH          = 1;
export const ADDRESS_LINE_SPACING               = 12;
export const ADDRESS_LINE_YPOS                  = ADDRESS_YPOS + ADDRESS_SIZE + ADDRESS_LINE_SPACING;
export const ADDRESS_LINE_WIDTH                 = LEFT_PANEL_WIDTH * (1/3);
export const ADDRESS_LINE_X2                    = VERTICAL_DIVIDER_XPOS;
export const ADDRESS_LINE_X1                    = VERTICAL_DIVIDER_XPOS - ADDRESS_LINE_WIDTH;
export const ADDRESS_LINE_COLOR                 = DIVIDER_COLOR;

export const PHONE_NUMBER_SIZE                  = ADDRESS_SIZE;
export const PHONE_NUMBER_WEIGHT                = 400;
export const PHONE_NUMBER_COLOR                 = 'white';
export const PHONE_NUMBER_XPOS                  = STARTX
export const PHONE_NUMBER_YPOS                  = ADDRESS_LINE_YPOS + ADDRESS_LINE_SPACING;
export const PHONE_NUMBER_YPOS_MIDDLE           = PHONE_NUMBER_YPOS + (PHONE_NUMBER_SIZE/2);

export const EMAIL_SIZE                         = ADDRESS_SIZE;
export const EMAIL_WEIGHT                       = 400;
export const EMAIL_COLOR                        = 'white';
export const EMAIL_XPOS                         = STARTX
export const EMAIL_YPOS                         = PHONE_NUMBER_YPOS_MIDDLE + (EMAIL_SIZE/2);

export const EXPERIENCE_HEADER_SIZE             = HEADER_SIZE;
export const EXPERIENCE_HEADER_XPOS             = RIGHT_PANEL_STARTX;
export const EXPERIENCE_HEADER_YPOS             = RIGHT_PANEL_STARTY;

export const POSITION_VERTICAL_SPACING          = 12;

export const POSITION_TITLE_WEIGHT              = 400;
export const POSITION_TITLE_SIZE                = 10;
export const POSITION_TITLE_COLOR               = 'white';
export const POSITION_TITLE_XPOS                = RIGHT_PANEL_STARTX;
export const POSITION_TITLE_YPOS_START          = EXPERIENCE_HEADER_YPOS + POSITION_TITLE_SIZE + HEADER_SPACING

export const POSITION_DATE_RANGE_WEIGHT         = 400;
export const POSITION_DATE_RANGE_SIZE           = 10;
export const POSITION_DATE_RANGE_COLOR          = 'white';

export const POSITION_COMPANY_WEIGHT            = 400;
export const POSITION_COMPANY_SIZE              = POSITION_TITLE_SIZE;
export const POSITION_COMPANY_COLOR             = 'white';
export const POSITION_COMPANY_XPOS              = RIGHT_PANEL_STARTX;
export const POSITION_COMPANY_YPOS_START        = POSITION_TITLE_YPOS_START

export const POSITION_ACCOMPLISHMENT_WEIGHT     = 400;
export const POSITION_ACCOMPLISHMENT_SIZE       = POSITION_TITLE_SIZE;
export const POSITION_ACCOMPLISHMENT_COLOR      = 'white';
export const POSITION_ACCOMPLISHMENT_XPOS       = RIGHT_PANEL_STARTX;
export const POSITION_ACCOMPLISHMENT_MAX_WIDTH  = RIGHT_PANEL_WIDTH - ( RIGHT_PANEL_MARGIN * 2)

export const POSITION_BULLET_COLOR              = 'red';
export const POSITION_BULLET_RADIUS             = 3;

export const EDUCATION_HEADER_WEIGHT            = 400;
export const EDUCATION_HEADER_SIZE              = HEADER_SIZE;
export const EDUCATION_HEADER_COLOR             = 'red';
export const EDUCATION_HEADER_XPOS              = RIGHT_PANEL_STARTX;
export const EDUCATION_HEADER                   = 'EDUCATION';

export const EDUCATION_WEIGHT                   = 400;
export const EDUCATION_SIZE                     = ADDRESS_SIZE;
export const EDUCATION_COLOR                    = 'white';
export const EDUCATION_XPOS                     = RIGHT_PANEL_STARTX;

export const EDUCATION_BULLET_COLOR             = 'red';
export const EDUCATION_BULLET_RADIUS            = 3;

export const EDUCATION_VERTICAL_SPACING         = POSITION_VERTICAL_SPACING;
